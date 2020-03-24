import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LogInterceptorService } from './log-interceptor.service';

export const httpInteceptProviders = [
    {provide: HTTP_INTERCEPTORS, useClass:LogInterceptorService, multi:true},
]