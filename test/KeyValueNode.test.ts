/// <reference path="../node_modules/@types/jasmine/index.d.ts" />
import { KeyValueNode } from '../src/KeyValueNode';

describe('KeyValueNode', () => {
  it('must be defined.', () => {
    expect(KeyValueNode).toBeDefined();
  });

  describe('data', () => {
    it('must be KeyValue', () => {
      let st: KeyValueNode = new KeyValueNode({key: 'FIRST', value: 'Primero'});
      expect( st.data ).toEqual({key: 'FIRST', value: 'Primero'});
    });

    xit('not a string', () => {
      let st: KeyValueNode = new KeyValueNode(9);
      // expect( st.data ).toThrowError();
    });

    xit('not a number', () => {
      let st: KeyValueNode = new KeyValueNode(9);
      // expect( st.data ).toThrowError();
    });
  });

  describe('show', () => {
    it('should return a KeyValue', () => {
      let st: KeyValueNode = new KeyValueNode({key: 'FIRST', value: 'Primero'});
      expect( st.show() ).toEqual({key: 'FIRST', value: 'Primero'});
    });
  });

  describe('compare', () => {
    let firstNode: KeyValueNode;
    let secondNode: KeyValueNode;
    beforeEach(() => {
      firstNode = new KeyValueNode({key: 'APP.VERSION', value: '1.0.0'});
      secondNode = new KeyValueNode({key: 'APP.NAME', value: 'Prueba App'});
    });

    it('should return 1, firstNode key is greater than secondNode key', () => {
      expect( firstNode.compare(secondNode) ).toBe(1);
    });

    it('should return 0, if keys are equal', () => {
      expect( firstNode.compare(firstNode) ).toBe(0);
      expect( secondNode.compare(secondNode) ).toBe(0);
    });

    it('should return -1, firstNode key is less than secondNode key', () => {
      expect( secondNode.compare(firstNode) ).toBe(-1);
    });
  });

  describe('compareByData', () => {
    let firstNode: KeyValueNode,
     secondNode: KeyValueNode;
    let firstString: string,
     secondString: string;

    beforeEach(() => {
      firstNode = new KeyValueNode({key: 'APP.VERSION', value: '1.0.0'});
      firstString = 'APP.VERSION';
      secondNode = new KeyValueNode({key: 'APP.NAME', value: 'Prueba App'});
      secondString = 'APP.NAME';
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
