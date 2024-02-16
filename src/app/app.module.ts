import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {MessageGridComponent} from './home/message-grid/message-grid.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HeaderComponent} from './home/header/header.component';
import {FooterComponent} from './home/footer/footer.component';
import {NavBarComponent} from './home/nav-bar/nav-bar.component';
import {BrokerConfigDialogComponent} from "./home/header/dialogs/broker-config-dialog/broker-config-dialog.component";
import {SettingsMenuComponent} from './home/header/settings-menu/settings-menu.component';
import {ToolbarModule} from "primeng/toolbar";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {PaginatorModule} from "primeng/paginator";
import {InputTextModule} from "primeng/inputtext";
import {SplitterModule} from "primeng/splitter";
import {ContextMenuModule} from "primeng/contextmenu";
import {DividerModule} from "primeng/divider";
import {DialogModule} from "primeng/dialog";
import {InputSwitchModule} from "primeng/inputswitch";
import {RippleModule} from "primeng/ripple";
import {ToastModule} from "primeng/toast";
import {ConfirmationService, MessageService} from "primeng/api";
import {TreeModule} from "primeng/tree";
import {TopicFormComponent} from './home/nav-bar/topic-form/topic-form.component';
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {DatePipe, NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MessageGridComponent,
    HeaderComponent,
    FooterComponent,
    NavBarComponent,
    BrokerConfigDialogComponent,
    SettingsMenuComponent,
    TopicFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToolbarModule,
    TableModule,
    ButtonModule,
    PaginatorModule,
    InputTextModule,
    SplitterModule,
    ContextMenuModule,
    DividerModule,
    DialogModule,
    InputSwitchModule,
    RippleModule,
    ToastModule,
    TreeModule,
    ConfirmDialogModule,
    NgOptimizedImage,
  ],
  providers: [MessageService, ConfirmationService, DatePipe, {
    provide: Window,
    useValue: window
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
