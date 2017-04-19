/// <reference path="../node_modules/@types/jasmine/index.d.ts" />
import { StringNode } from '../src/StringNode';

describe('StringNode', () => {
  it('must be defined.', () => {
    expect(StringNode).toBeDefined();
  });

  describe('data', () => {
    it('must be string', () => {
      let st: StringNode = new StringNode('This is a test');
      expect( st.data ).toBe('This is a test');
    });

    xit('not a number', () => {
      let st: StringNode = new StringNode(9);
      // expect( st.data ).toThrowError();
    });
  });

  describe('show', () => {
    it('should return a string', () => {
      let st: StringNode = new StringNode('This is a test');
      expect( st.show() ).toBe('This is a test');
    });
  });

  describe('compare', () => {
    let firstNode: StringNode;
    let secondNode: StringNode;
    beforeEach(() => {
      firstNode = new StringNode('This is a test');
      secondNode = new StringNode('Second test...');
    });

    it('should return 1, firstNode is greater than secondNode', () => {
      expect( firstNode.compare(secondNode) ).toBe(1);
    });

    it('should return 0, if strings are equal', () => {
      expect( firstNode.compare(firstNode) ).toBe(0);
      expect( secondNode.compare(secondNode) ).toBe(0);
    });

    it('should return -1, firstNode is less than secondNode', () => {
      expect( secondNode.compare(firstNode) ).toBe(-1);
    });
  });

  describe('compareByData', () => {
    let firstNode: StringNode,
     secondNode: StringNode;
    let firstString: string,
     secondString: string;

    beforeEach(() => {
      firstNode = new StringNode('This is a test');
      firstString = 'This is a test';
      secondNode = new StringNode('Second test...');
      secondString = 'Second test...';
    });

    it('should return 1, firstNode is greater than secondString', () => {
      expect( firstNode.compareByData(secondString) ).toBe(1);
    });

    it('should return 0, if strings are equal', () => {
      expect( firstNode.compareByData(firstString) ).toBe(0);
      expect( secondNode.compareByData(secondString) ).toBe(0);
    });

    it('should return -1, firstNode is less than secondString', () => {
      expect( secondNode.compareByData(firstString) ).toBe(-1);
    });
  });
});
