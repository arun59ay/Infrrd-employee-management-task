import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LucideAngularModule, Search, Bell, X, Share2, Mail, Phone, MessageSquare, History, User, HelpCircle, LogOut, SlidersHorizontal } from 'lucide-angular';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeCardComponent } from './components/employee-card/employee-card.component';
import { FilterPanelComponent } from './components/filter-panel/filter-panel.component';
import { SearchPanelComponent } from './components/search-panel/search-panel.component';
import { ResultsHeaderComponent } from './components/results-header/results-header.component';
import { NotificationPopupComponent } from './components/notification-popup/notification-popup.component';
import { RatingDisplayComponent } from './components/rating-display/rating-display.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    EmployeeListComponent,
    EmployeeCardComponent,
    FilterPanelComponent,
    SearchPanelComponent,
    ResultsHeaderComponent,
    NotificationPopupComponent,
    RatingDisplayComponent,
    EmployeeFormComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    LucideAngularModule.pick({
      Search, Bell, X, Share2, Mail, Phone, MessageSquare,
      History, User, HelpCircle, LogOut, SlidersHorizontal
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }