
export class CustomOption {
  name: string;
  visible: true;
  entitys: any[];

  constructor(name: string, visible: true, entitys: any[]) {
    this.name = name;
    this.visible = visible;
    this.entitys = entitys;
  }
}
