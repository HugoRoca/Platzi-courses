import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

import { ROLES_KEY } from '../decorators/roles.decorator';
import { PayloadToken } from '../models/token.model';
import { Role } from '../models/roles.models';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const roles: Role[] = this.reflector.get<Role[]>(
      ROLES_KEY,
      context.getHandler(),
    ); // TODO: ['admin', 'customer']
    if (roles.length === 0) return true;

    const request = context.switchToHttp().getRequest();
    const user = request.user as PayloadToken; // TODO: { role: 'admin', sub: 1234 }
    const isAuth = roles.some((item) => item === user.role);

    if (!isAuth) throw new UnauthorizedException('Your role is wrong');
    return true;
  }
}
