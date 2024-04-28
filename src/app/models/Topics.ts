export interface Topic {
  name: string,
  partitions: any,
  config: any,
  preferredReplicaPercent: number,
  underReplicatedPartitions: any
  availableSize: number,
  totalSize: number
}


export interface Partitions {
 id:number,
 replicas: Replica[],
 size:number,
 firstOffset: number
}


export interface Replica {

}
