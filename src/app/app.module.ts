import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './pages/admin/admin.component';
import { LoginComponent } from './pages/login/login.component';
import { LandingComponent } from './pages/landing/landing.component';
import { ApplyComponent } from './pages/landing/components/apply/apply.component';
import { ArticlesComponent } from './pages/landing/components/articles/articles.component';
import { HomeComponent } from './pages/landing/components/home/home.component';
import { TeamComponent } from './pages/landing/components/team/team.component';
import { MerchandiseComponent } from './pages/landing/components/merchandise/merchandise.component';
import { ProjectsComponent } from './pages/landing/components/projects/projects.component';
import { ContactComponent } from './pages/landing/components/contact/contact.component';
import { SubscriptionComponent } from './pages/landing/components/subscription/subscription.component';
import { HistoryComponent } from './pages/landing/components/history/history.component';
import { NavbarComponent } from './pages/landing/components/navbar/navbar.component';
import { AdminNavbarComponent } from './pages/admin/components/admin-navbar/admin-navbar.component';
import { AdminAccountsComponent } from './pages/admin/components/admin-accounts/admin-accounts.component';
import { AccountsAddComponent } from './pages/admin/components/admin-accounts/accounts-add/accounts-add.component';
import { AccountsListComponent } from './pages/admin/components/admin-accounts/accounts-list/accounts-list.component';
import { AccountsUpdateComponent } from './pages/admin/components/admin-accounts/accounts-update/accounts-update.component';
import { AdminContentComponent } from './pages/admin/components/admin-content/admin-content.component';
import { AdminTeamsComponent } from './pages/admin/components/admin-teams/admin-teams.component';
import { TeamsAddComponent } from './pages/admin/components/admin-teams/teams-add/teams-add.component';
import { TeamsUpdateComponent } from './pages/admin/components/admin-teams/teams-update/teams-update.component';
import { TeamsListComponent } from './pages/admin/components/admin-teams/teams-list/teams-list.component';
import { AdminSettingsComponent } from './pages/admin/components/admin-settings/admin-settings.component';
import { ApplyformComponent } from './pages/applyform/applyform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticleListComponent } from './pages/articlespage/article-list/article-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { ArticlespageComponent } from './pages/articlespage/articlespage.component';
import { DatePipe } from '@angular/common';
import { AdminMerchandiseComponent } from './pages/admin/components/admin-merchandise/admin-merchandise.component';
import { MerchandiseAddComponent } from './pages/admin/components/admin-merchandise/merchandise-add/merchandise-add.component';
import { MerchandiseUpdateComponent } from './pages/admin/components/admin-merchandise/merchandise-update/merchandise-update.component';
import { MerchandiseListComponent } from './pages/admin/components/admin-merchandise/merchandise-list/merchandise-list.component';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { authInterceptorProviders } from './shared/helpers/auth.interceptor';
import { ContentAddComponent } from './pages/admin/components/admin-content/content-add/content-add.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    LandingComponent,
    ApplyComponent,
    ArticlesComponent,
    HomeComponent,
    TeamComponent,
    MerchandiseComponent,
    ProjectsComponent,
    ContactComponent,
    SubscriptionComponent,
    HistoryComponent,
    NavbarComponent,
    AdminNavbarComponent,
    AdminAccountsComponent,
    AccountsAddComponent,
    AccountsListComponent,
    AccountsUpdateComponent,
    AdminContentComponent,
    AdminTeamsComponent,
    TeamsAddComponent,
    TeamsUpdateComponent,
    TeamsListComponent,
    AdminSettingsComponent,
    ApplyformComponent,
    ArticleListComponent,
    ArticlespageComponent,
    AdminMerchandiseComponent,
    MerchandiseAddComponent,
    MerchandiseUpdateComponent,
    MerchandiseListComponent,
    ContentAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxPaginationModule,
    HttpClientModule,
    EditorModule,
    ReactiveFormsModule,
  ],
  providers: [
    DatePipe,
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' },
    authInterceptorProviders,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
