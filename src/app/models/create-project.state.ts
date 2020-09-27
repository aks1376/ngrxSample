import { DeliveryDetail } from './delivery-detail';
import { ProjectSettings } from './project-settings';
import { ProjectDetail } from './project-detail';

export class CreateProjectState {

    projectDetail: {
        isFormValid: false,
        value: ProjectDetail
    };

    projectSetting: {
        isFormValid: false,
        value: ProjectSettings
    };

    deliveryDetail: {
        isFormValid: false,
        value: DeliveryDetail
    };

}
