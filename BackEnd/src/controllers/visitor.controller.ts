import { IDBService } from '../db/types/dbService';
import { VisitorDTO } from '../types/controller/visitor';

export class VisitorController {
  dbService: IDBService;

  constructor(dbService: IDBService) {
    this.dbService = dbService;
  }

  public async login(username: string, password: string): Promise<VisitorDTO | null> {
    return await this.dbService.findVisitor(username, password);
  }
}