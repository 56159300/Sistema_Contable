import { Toast, ToastrService, ToastPackage } from 'ngx-toastr';

export class CustomToast extends Toast {
	constructor(protected toastrService: ToastrService, public toastPackage: ToastPackage) {
		super(toastrService, toastPackage);
	}

	closeToast() {
		this.toastPackage.triggerAction(true);
		this.toastrService.clear(this.toastPackage.toastId);
	}

	stickAround() {
		return;
	}

	delayedHideToast() {
		return;
	}
}
