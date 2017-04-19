import { Node } from '../src/Node.interface';
import { KeyValue } from '../src/KeyValue.interface';

export class KeyValueNode implements Node<string> {
  data: string;
  left: KeyValueNode;
  right: KeyValueNode;

  constructor(data?: KeyValue) {
    if (data) {
      this.data = data;
    }
  }

  show():KeyValue {
    return this.data;
  };

  compare( secondNode: KeyValueNode ):number {
    return this.compareByData( secondNode.show().key );
  };

  compareByData( secondNodeData: KeyValue ): number {
    if( this.show().key === secondNodeData ) {
      return 0;
    } else {
      return ( this.show().key > secondNodeData ) ? 1 : -1;
    }
  }
}
