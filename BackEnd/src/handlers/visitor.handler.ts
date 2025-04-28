import { VisitorController } from '../controllers/visitor.controller';
import { Request, Response } from 'express';

export class VisitorHandler {
  visitorController: VisitorController;

  constructor(visitorController: VisitorController) {
    this.visitorController = visitorController;
  }

  public async login(request: Request, response: Response): Promise<void> {
    const { username, password } = request.body;

    if (!username || !password) {
      response.status(400).json({ message: 'Username y password requeridos' });
      return;
    }

    try {
      const visitor = await this.visitorController.login(username, password);

      if (!visitor) {
        response.status(401).json({ message: 'Credenciales incorrectas' });
        return;
      }

      response.cookie('visitorName', visitor.nombreCompleto, {
        httpOnly: false,
        secure: false,
        sameSite: 'lax',
        maxAge: 24 * 60 * 60 * 1000,
      });
      
      response.cookie('ticketNumber', visitor.numeroBoleto, {
        httpOnly: false,
        secure: false,
        sameSite: 'lax',
        maxAge: 24 * 60 * 60 * 1000,
      });

      response.json({ message: 'Log In correct'});

    } catch (error) {
      response.status(500).json({ message: 'Error interno del servidor' });
    }
  }

  public async getVisitor(request: Request, response: Response): Promise<void> {
    const name = request.cookies['visitorName'];
    const ticket = request.cookies['ticketNumber'];
  
    if (!name || !ticket) {
      response.status(401).json({ message: 'No autorizado' });
      return;
    }
  
    response.json({
      nombreCompleto: name,
      numeroBoleto: ticket,
    });
  }  
}