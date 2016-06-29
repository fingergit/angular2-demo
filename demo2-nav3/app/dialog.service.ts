/**
 * Created by laj on 2016/6/29.
 */

export class DialogService{
    confirm(message?: string){
        return new Promise<boolean>(resolve => {
            return resolve(window.confirm(message || 'Is it OK?'));
        });
    }
}