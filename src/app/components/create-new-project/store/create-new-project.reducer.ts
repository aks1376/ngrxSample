import { ActionTypes } from './create-new-project.action';
import { CreateProjectActions } from './create-new-project.action';

const initialState = {
    projectDetail: {
        isFormValid: false,
        value: {
            projectName: undefined,
            projectOwner: undefined,
            customerName: undefined,
            contactPhone: undefined,
            email: undefined,
            companySite: undefined
        }
    },
    projectSetting: {
        isFormValid: false,
        value: {
            email: undefined,
            language: undefined,
            timezone: undefined,
            communication: {
                email: false,
                sms: false,
                phone: false
            }
        }
    },
    deliveryDetail: {
        isFormValid: false,
        value: {
            firstAddress: undefined,
            secondAddress: undefined,
            postcode: undefined,
            city: undefined,
            state: undefined,
            country: undefined
        }
    }
};

export function createNewProjectReducer(state = initialState, action: CreateProjectActions) {
    switch (action.type) {
        case ActionTypes.SET_PROJECT_DETAIL:
            return {
                ...state,
                projectDetail: { isFormValid: true, value: action.payload }
            };
        case ActionTypes.SET_PROJECT_SETTING:
            return {
                ...state,
                projectSetting: { isFormValid: true, value: action.payload }
            };
        case ActionTypes.SET_DELIVERY_DETAIL:
            return {
                ...state,
                deliveryDetail: { isFormValid: true, value: action.payload }
            };
        case ActionTypes.RESET_STATE:
            return { ...initialState };
        default:
            return state;

    }
}
