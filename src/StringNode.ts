import { Node } from '../src/Node.interface';

export class StringNode implements Node<string> {
  data: string;
  left: StringNode;
  right: StringNode;

  constructor(data?: string) {
    if (data) {
      this.data = data;
    }
  }

  show():string {
    return this.data;
  };

  compare( secondNode: StringNode ):number {
    return this.compareByData( secondNode.show() );
  };

  compareByData( secondNodeData: string  ): number {
    if( this.show() === secondNodeData ) {
      return 0;
    } else {
      return ( this.show() > secondNodeData ) ? 1 : -1;
    }
  }
}
