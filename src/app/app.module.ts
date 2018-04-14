import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { UserResolver } from './user/user.resolver';
import { AuthGuard } from './core/auth.guard';
import { AuthService } from './core/auth.service';
import { UserService } from './core/user.service';
import { ReactiveFormsModule } from '@angular/forms';
import {NgxGraphModule} from '@swimlane/ngx-graph';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
    AngularFireModule.initializeApp(environment.firebase),
<<<<<<< HEAD
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgxGraphModule,
    NgbModule.forRoot()
=======
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
>>>>>>> a6f6a1492ab1d04eaca4f892fd0e005c3d5decfe
  ],
  providers: [AuthService, UserService, UserResolver, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
