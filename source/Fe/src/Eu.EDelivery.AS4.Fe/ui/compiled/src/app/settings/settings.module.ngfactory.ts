/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../../../../src/app/settings/settings.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/router/src/router_module';
import * as import4 from '@angular/forms/src/directives';
import * as import5 from '@angular/forms/src/form_providers';
import * as import6 from '../../../../src/app/authentication/authentication.module';
import * as import7 from 'angular2-text-mask/dist/angular2TextMask';
import * as import8 from '../../../../src/app/common/as4components.module';
import * as import9 from 'angular-sortablejs/dist/src/sortablejs.module';
import * as import10 from '@angular/common/src/localization';
import * as import11 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import12 from '../../../../src/app/common/spinner/spinner.service';
import * as import13 from '../../../../src/app/authentication/authentication.service';
import * as import14 from '@angular/forms/src/form_builder';
import * as import15 from '../../../../src/app/common/common.guards';
import * as import16 from '../../../../src/app/common/modal/modal.service';
import * as import17 from '../../../../src/app/common/dialog.service';
import * as import18 from '../../../../src/app/settings/settings.store';
import * as import19 from '../../../../src/app/settings/settings.service';
import * as import20 from '../../../../src/app/settings/runtime.store';
import * as import21 from '../../../../src/app/settings/runtime.service';
import * as import22 from '@angular/core/src/di/injector';
import * as import23 from '../authentication/login/login.component.ngfactory';
import * as import24 from '../common/wrapper.component.ngfactory';
import * as import25 from './agent/agent.component.ngfactory';
import * as import26 from './settings/settings.component.ngfactory';
import * as import27 from './receptionawarenessagent/receptionawarenessagent.component.ngfactory';
import * as import28 from '@angular/core/src/i18n/tokens';
import * as import29 from '../../../../src/app/authentication/login/login.component';
import * as import30 from '../../../../src/app/common/wrapper.component';
import * as import31 from '../../../../src/app/settings/agent/agent.component';
import * as import32 from '../../../../src/app/settings/settings/settings.component';
import * as import33 from '../../../../src/app/settings/receptionawarenessagent/receptionawarenessagent.component';
import * as import34 from '@angular/http/src/backends/xhr_backend';
import * as import35 from '@angular/http/src/base_request_options';
import * as import36 from 'angular2-jwt/angular2-jwt';
import * as import37 from '@angular/router/src/router';
import * as import38 from '../../../../src/app/common/error.handler';
import * as import39 from '@angular/router/src/router_config_loader';
import * as import40 from '@angular/http/src/http';
import * as import41 from '@angular/core/src/error_handler';
class SettingsModuleInjector extends import0.NgModuleInjector<import1.SettingsModule> {
  _CommonModule_0:import2.CommonModule;
  _RouterModule_1:import3.RouterModule;
  _InternalFormsSharedModule_2:import4.InternalFormsSharedModule;
  _FormsModule_3:import5.FormsModule;
  _AuthenticationModule_4:import6.AuthenticationModule;
  _ReactiveFormsModule_5:import5.ReactiveFormsModule;
  _TextMaskModule_6:import7.TextMaskModule;
  _As4ComponentsModule_7:import8.As4ComponentsModule;
  _SortablejsModule_8:import9.SortablejsModule;
  _SettingsModule_9:import1.SettingsModule;
  __NgLocalization_10:import10.NgLocaleLocalization;
  __RadioControlRegistry_11:import11.RadioControlRegistry;
  __ROUTES_12:any[];
  __SpinnerService_13:import12.SpinnerService;
  __Http_14:any;
  __AuthenticationStore_15:import13.AuthenticationStore;
  __AuthenticationService_16:import13.AuthenticationService;
  __FormBuilder_17:import14.FormBuilder;
  __MustBeAuthorizedGuard_18:import15.MustBeAuthorizedGuard;
  __ModalService_19:import16.ModalService;
  __DialogService_20:import17.DialogService;
  __ErrorHandler_21:any;
  __AuthHttp_22:any;
  __SettingsStore_23:import18.SettingsStore;
  __SettingsService_24:import19.SettingsService;
  __RuntimeStore_25:import20.RuntimeStore;
  __RuntimeService_26:import21.RuntimeService;
  constructor(parent:import22.Injector) {
    super(parent,[
      import23.LoginComponentNgFactory,
      import24.WrapperComponentNgFactory,
      import25.AgentSettingsComponentNgFactory,
      import26.SettingsComponentNgFactory,
      import27.ReceptionAwarenessAgentComponentNgFactory
    ]
    ,([] as any[]));
  }
  get _NgLocalization_10():import10.NgLocaleLocalization {
    if ((this.__NgLocalization_10 == null)) { (this.__NgLocalization_10 = new import10.NgLocaleLocalization(this.parent.get(import28.LOCALE_ID))); }
    return this.__NgLocalization_10;
  }
  get _RadioControlRegistry_11():import11.RadioControlRegistry {
    if ((this.__RadioControlRegistry_11 == null)) { (this.__RadioControlRegistry_11 = new import11.RadioControlRegistry()); }
    return this.__RadioControlRegistry_11;
  }
  get _ROUTES_12():any[] {
    if ((this.__ROUTES_12 == null)) { (this.__ROUTES_12 = [
        [{
          path: 'login',
          component: import29.LoginComponent
        }
      ],
        [{
          path: '',
          component: import30.WrapperComponent,
          children: [
            {
              path: 'inbound',
              component: import31.AgentSettingsComponent,
              data: {
                title: 'Inbound',
                type: 'receiveAgents'
              }
              ,
              canActivate: [import15.MustBeAuthorizedGuard]
            }
            ,
            {
              path: 'outbound',
              component: import31.AgentSettingsComponent,
              data: {
                title: 'Outbound',
                type: 'submitAgents'
              }
              ,
              canActivate: [import15.MustBeAuthorizedGuard]
            }
            ,
            {
              path: 'settings',
              children: [
                {
                  path: '',
                  redirectTo: 'common',
                  pathMatch: 'full'
                }
                ,
                {
                  path: 'common',
                  component: import32.SettingsComponent,
                  data: {title: 'Base settings'}
                }
                ,
                {
                  path: 'agents',
                  data: {title: 'Agents'},
                  children: [
                    {
                      path: '',
                      redirectTo: 'submit',
                      pathMatch: 'full'
                    }
                    ,
                    {
                      path: 'submit',
                      component: import31.AgentSettingsComponent,
                      data: {
                        title: 'Submit',
                        type: 'submitAgents'
                      }

                    }
                    ,
                    {
                      path: 'send',
                      component: import31.AgentSettingsComponent,
                      data: {
                        title: 'Send',
                        type: 'sendAgents'
                      }

                    }
                    ,
                    {
                      path: 'receive',
                      component: import31.AgentSettingsComponent,
                      data: {
                        title: 'Receive',
                        type: 'receiveAgents'
                      }

                    }
                    ,
                    {
                      path: 'deliver',
                      component: import31.AgentSettingsComponent,
                      data: {
                        title: 'Deliver',
                        type: 'deliverAgents'
                      }

                    }
                    ,
                    {
                      path: 'notify',
                      component: import31.AgentSettingsComponent,
                      data: {
                        title: 'Notify',
                        type: 'notifyAgents'
                      }

                    }
                    ,
                    {
                      path: 'receptionawareness',
                      component: import33.ReceptionAwarenessAgentComponent,
                      data: {
                        title: 'Reception',
                        type: 'receptionAwarenessAgent'
                      }

                    }

                  ]

                }

              ]
              ,
              data: {title: 'Settings'}
            }

          ]
          ,
          canActivate: [import15.MustBeAuthorizedGuard]
        }
      ]
    ]
    ); }
    return this.__ROUTES_12;
  }
  get _SpinnerService_13():import12.SpinnerService {
    if ((this.__SpinnerService_13 == null)) { (this.__SpinnerService_13 = new import12.SpinnerService()); }
    return this.__SpinnerService_13;
  }
  get _Http_14():any {
    if ((this.__Http_14 == null)) { (this.__Http_14 = import12.spinnerHttpServiceFactory(this.parent.get(import34.XHRBackend),this.parent.get(import35.RequestOptions),this._SpinnerService_13)); }
    return this.__Http_14;
  }
  get _AuthenticationStore_15():import13.AuthenticationStore {
    if ((this.__AuthenticationStore_15 == null)) { (this.__AuthenticationStore_15 = new import13.AuthenticationStore()); }
    return this.__AuthenticationStore_15;
  }
  get _AuthenticationService_16():import13.AuthenticationService {
    if ((this.__AuthenticationService_16 == null)) { (this.__AuthenticationService_16 = new import13.AuthenticationService(this._Http_14,this._AuthenticationStore_15,this.parent.get(import36.JwtHelper),this.parent.get(import37.Router))); }
    return this.__AuthenticationService_16;
  }
  get _FormBuilder_17():import14.FormBuilder {
    if ((this.__FormBuilder_17 == null)) { (this.__FormBuilder_17 = new import14.FormBuilder()); }
    return this.__FormBuilder_17;
  }
  get _MustBeAuthorizedGuard_18():import15.MustBeAuthorizedGuard {
    if ((this.__MustBeAuthorizedGuard_18 == null)) { (this.__MustBeAuthorizedGuard_18 = new import15.MustBeAuthorizedGuard(this.parent.get(import37.Router))); }
    return this.__MustBeAuthorizedGuard_18;
  }
  get _ModalService_19():import16.ModalService {
    if ((this.__ModalService_19 == null)) { (this.__ModalService_19 = new import16.ModalService()); }
    return this.__ModalService_19;
  }
  get _DialogService_20():import17.DialogService {
    if ((this.__DialogService_20 == null)) { (this.__DialogService_20 = new import17.DialogService(this._ModalService_19)); }
    return this.__DialogService_20;
  }
  get _ErrorHandler_21():any {
    if ((this.__ErrorHandler_21 == null)) { (this.__ErrorHandler_21 = import38.errorHandlerFactory(this._DialogService_20,this._SpinnerService_13)); }
    return this.__ErrorHandler_21;
  }
  get _AuthHttp_22():any {
    if ((this.__AuthHttp_22 == null)) { (this.__AuthHttp_22 = import8.authHttpServiceFactory(this._Http_14,this.parent.get(import35.RequestOptions))); }
    return this.__AuthHttp_22;
  }
  get _SettingsStore_23():import18.SettingsStore {
    if ((this.__SettingsStore_23 == null)) { (this.__SettingsStore_23 = new import18.SettingsStore()); }
    return this.__SettingsStore_23;
  }
  get _SettingsService_24():import19.SettingsService {
    if ((this.__SettingsService_24 == null)) { (this.__SettingsService_24 = new import19.SettingsService(this._AuthHttp_22,this._SettingsStore_23)); }
    return this.__SettingsService_24;
  }
  get _RuntimeStore_25():import20.RuntimeStore {
    if ((this.__RuntimeStore_25 == null)) { (this.__RuntimeStore_25 = new import20.RuntimeStore()); }
    return this.__RuntimeStore_25;
  }
  get _RuntimeService_26():import21.RuntimeService {
    if ((this.__RuntimeService_26 == null)) { (this.__RuntimeService_26 = new import21.RuntimeService(this._Http_14,this._RuntimeStore_25)); }
    return this.__RuntimeService_26;
  }
  createInternal():import1.SettingsModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._RouterModule_1 = new import3.RouterModule(this.parent.get(import3.ROUTER_FORROOT_GUARD,(null as any)));
    this._InternalFormsSharedModule_2 = new import4.InternalFormsSharedModule();
    this._FormsModule_3 = new import5.FormsModule();
    this._AuthenticationModule_4 = new import6.AuthenticationModule();
    this._ReactiveFormsModule_5 = new import5.ReactiveFormsModule();
    this._TextMaskModule_6 = new import7.TextMaskModule();
    this._As4ComponentsModule_7 = new import8.As4ComponentsModule();
    this._SortablejsModule_8 = new import9.SortablejsModule();
    this._SettingsModule_9 = new import1.SettingsModule();
    return this._SettingsModule_9;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.RouterModule)) { return this._RouterModule_1; }
    if ((token === import4.InternalFormsSharedModule)) { return this._InternalFormsSharedModule_2; }
    if ((token === import5.FormsModule)) { return this._FormsModule_3; }
    if ((token === import6.AuthenticationModule)) { return this._AuthenticationModule_4; }
    if ((token === import5.ReactiveFormsModule)) { return this._ReactiveFormsModule_5; }
    if ((token === import7.TextMaskModule)) { return this._TextMaskModule_6; }
    if ((token === import8.As4ComponentsModule)) { return this._As4ComponentsModule_7; }
    if ((token === import9.SortablejsModule)) { return this._SortablejsModule_8; }
    if ((token === import1.SettingsModule)) { return this._SettingsModule_9; }
    if ((token === import10.NgLocalization)) { return this._NgLocalization_10; }
    if ((token === import11.RadioControlRegistry)) { return this._RadioControlRegistry_11; }
    if ((token === import39.ROUTES)) { return this._ROUTES_12; }
    if ((token === import12.SpinnerService)) { return this._SpinnerService_13; }
    if ((token === import40.Http)) { return this._Http_14; }
    if ((token === import13.AuthenticationStore)) { return this._AuthenticationStore_15; }
    if ((token === import13.AuthenticationService)) { return this._AuthenticationService_16; }
    if ((token === import14.FormBuilder)) { return this._FormBuilder_17; }
    if ((token === import15.MustBeAuthorizedGuard)) { return this._MustBeAuthorizedGuard_18; }
    if ((token === import16.ModalService)) { return this._ModalService_19; }
    if ((token === import17.DialogService)) { return this._DialogService_20; }
    if ((token === import41.ErrorHandler)) { return this._ErrorHandler_21; }
    if ((token === import36.AuthHttp)) { return this._AuthHttp_22; }
    if ((token === import18.SettingsStore)) { return this._SettingsStore_23; }
    if ((token === import19.SettingsService)) { return this._SettingsService_24; }
    if ((token === import20.RuntimeStore)) { return this._RuntimeStore_25; }
    if ((token === import21.RuntimeService)) { return this._RuntimeService_26; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const SettingsModuleNgFactory:import0.NgModuleFactory<import1.SettingsModule> = new import0.NgModuleFactory(SettingsModuleInjector,import1.SettingsModule);