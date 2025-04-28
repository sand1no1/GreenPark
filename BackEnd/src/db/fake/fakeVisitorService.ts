import { Visitor } from '../../types/db/visitor';
import { VisitorDTO } from '../../types/controller/visitor';

const visitors: Visitor[] = [
  {
    username: 'juanp10',
    password: 'jpGP^3',
    nombreCompleto: 'Juan Pérez',
    numeroBoleto: '001',
  },
  {
    username: 'maria456',
    password: 'MaryGpark27',
    nombreCompleto: 'Maria González',
    numeroBoleto: '002',
  },
  {
    username: 'carlosg15',
    password: 'CarGP5463!',
    nombreCompleto: 'Carlos Gómez',
    numeroBoleto: '003',
  },
  {
    username: 'ana_luna',
    password: 'AnaLun4*GP',
    nombreCompleto: 'Ana Luna',
    numeroBoleto: '004',
  },
];

export class FakeVisitorService {
  public async findVisitor(username: string, password: string): Promise<VisitorDTO | null> {
    const visitor = visitors.find(
      (v) => v.username === username && v.password === password
    );

    if (!visitor) {
      return null;
    }

    return {
      nombreCompleto: visitor.nombreCompleto,
      numeroBoleto: visitor.numeroBoleto,
    };
  }
}