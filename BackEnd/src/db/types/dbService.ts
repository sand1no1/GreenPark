import { VisitorDTO } from '../../types/controller/visitor';

export interface IDBService {
  findVisitor(username: string, password: string): Promise<VisitorDTO | null>;
}