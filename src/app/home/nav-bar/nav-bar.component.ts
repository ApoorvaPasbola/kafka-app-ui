import { AfterViewInit, Component, EventEmitter, Output } from '@angular/core';
import { HomeService } from '../home.service';
import { ConfirmationService, MessageService, TreeNode } from 'primeng/api';
import { Topic } from 'src/app/models/Topics';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements AfterViewInit {
  topics: Topic[] = [];
  selectedTopic!: TreeNode;

  contextMenu = [
    {
      label: 'Add',
      icon: 'pi pi-plus',
      command: () => (this._homeService.showTopicForm = true),
    },
    {
      label: 'Delete',
      icon: 'pi pi-trash',
      command: (event: Event) => this.openConfirmDialog(event),
    },
  ];
  menuData: TreeNode[] = [
    {
      key: '0',
      label: 'Topics',
      icon: 'pi pi-database',
      data: 'Topic Data',
      expanded: true,
      selectable: false,
      children: [{}],
    },
  ];

  constructor(
    public _homeService: HomeService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  @Output() topicChangeEvent = new EventEmitter<string>();

  ngAfterViewInit(): void {
    this._homeService.getTopics().subscribe((data) => {
      this.topics = data;
      let topicNode: TreeNode[] = this.topics.map((value: Topic, index) => {
        return {
          key: `0-${index}`,
          label: value.name,
          data: value.name,
          icon: 'pi pi-fw pi-file',
          leaf: true,
        };
      });
      this.menuData[0] = { ...this.menuData[0], children: topicNode };
    });
  }

  gridUpdateEvent(event: any) {
    let node: TreeNode = event.node;
    this.topicChangeEvent.emit(node.data);
  }

  private openConfirmDialog(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: `Do you want to delete ${this.selectedTopic.data} topic?`,
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: 'p-button-danger p-button-text',
      rejectButtonStyleClass: 'p-button-text p-button-text',
      accept: () => {
        this._homeService.deleteTopic(this.selectedTopic).subscribe({
          next: () => {
            this.messageService.add({
              severity: 'success',
              summary: 'Deletion Complete',
              detail: `Successfully deleted "${this.selectedTopic.data}" topic`,
            });
          },
          error: (error) => {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: `${JSON.stringify(error)}`,
            });
          },
        });
      },
      reject: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Info',
          detail: 'No Changes Made',
        });
      },
    });
  }
}
