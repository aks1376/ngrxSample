import { DeliveryDetail } from './../../../models/delivery-detail';
import { ProjectSettings } from './../../../models/project-settings';
import { Action } from '@ngrx/store';
import { ProjectDetail } from 'src/app/models/project-detail';

export enum ActionTypes {
    SET_PROJECT_DETAIL = 'SET_PROJECT_DETAIL',
    SET_PROJECT_SETTING = 'SET_PROJECT_SETTING',
    SET_DELIVERY_DETAIL = 'DELIVERY_DETAIL',
    RESET_STATE = 'RESET_STATE'
}

export class SetProjectDetail implements Action {
    readonly type = ActionTypes.SET_PROJECT_DETAIL;
    constructor(public payload: ProjectDetail) { }
}

export class SetProjectSetting implements Action {
    readonly type = ActionTypes.SET_PROJECT_SETTING;
    constructor(public payload: ProjectSettings) { }
}

export class SetDeliveryDetails implements Action {
    readonly type = ActionTypes.SET_DELIVERY_DETAIL;
    constructor(public payload: DeliveryDetail) { }
}

export class ResetState implements Action {
    readonly type = ActionTypes.RESET_STATE;
}

export type CreateProjectActions = SetProjectDetail | SetProjectSetting | SetDeliveryDetails | ResetState;
