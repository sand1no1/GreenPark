import { Visitor } from '../../types/db/visitor';
import { VisitorDTO } from '../../types/controller/visitor';

const visitors: Visitor[] = [
  {
    username: 'alejandra.m',
    password: 'verde123',
    nombreCompleto: 'Alejandra Morales',
    numeroBoleto: '00123',
  },
  {
    username: 'david.p',
    password: 'bosque456',
    nombreCompleto: 'David Pérez',
    numeroBoleto: '00124',
  },
  {
    username: 'lucia.r',
    password: 'eco789',
    nombreCompleto: 'Lucía Ramírez',
    numeroBoleto: '00125',
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
