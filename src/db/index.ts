import Dexie, { Table } from "dexie";

export type NumemoInput = {
  id: string;
  content: string;
  createdAt: string;
  isEditing: boolean;
  sortNum: number;
};

export type Tab = {
  id: string;
  isEditing: boolean;
  numemoInputIds: string[];
  inputs: NumemoInput[];
};

export class AppDB extends Dexie {
  numemoInputs!: Table<NumemoInput>;
  tabs!: Table<Tab>;

  constructor() {
    super("numemoDatabase");
    this.version(1).stores({
      numemoInputs: "&id, isEditing",
      tabs: "&id, *inputs, *numemoInputIds",
    });
  }
}

export const db = new AppDB();
