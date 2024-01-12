import { _decorator, Component, director, EventTouch, Input, input, Node, UITransform, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('test')
export class test extends Component {

    @property(Node)
    cameraNode: Node = null;

    start() {
        const player = this.node;
        // console.log("cameraPos = " + this.cameraNode.getPosition());
        // console.log("cameraWorldPos = " + this.cameraNode.getWorldPosition());
        console.log(player.getPosition());
        console.log(player.getWorldPosition());
        const w_pos = player.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0));
        console.log(w_pos);

        // 摄像机UITRANS
        const uitrans = this.cameraNode.getComponent(UITransform);
        const test = uitrans.convertToWorldSpaceAR(new Vec3(0, 0));
        console.log("0,0转换结果：" + test);

        // 注册点击事件
        input.on(Input.EventType.TOUCH_START, (e: EventTouch) => {
            const touchPos = e.getUILocation(); // 触点坐标相对于摄像机坐标系
            // const touchPos2 = e.getUILocation();
            console.log("touchPos = " + touchPos);
            // console.log("touchPos2(getUILocation) = " + touchPos2);

            const touchPosV3 = new Vec3(touchPos.x, touchPos.y);

            // 当相机移动之后，触点坐标就应该加上相机的偏移量了
            const finalPos = new Vec3(touchPosV3.x + this.cameraNode.position.x, touchPosV3.y + this.cameraNode.position.y);


            // 把触点从摄像机坐标系转换到世界坐标系
            // const targetPos = uitrans.convertToWorldSpaceAR(touchPosV3);
            // console.log("targetPos = " + targetPos);


            // const targetPos2 = new Vec3(touchPos2.x, touchPos2.y);


            // const targetPos2_Trans = uitrans.convertToNodeSpaceAR(targetPos2);
            // console.log("targetPos2_Trans = " + targetPos2_Trans);

            player.setWorldPosition(finalPos);
            // player.setPosition(targetPos2_Trans);

            console.log("playerPos = " + player.getPosition());
            console.log("playerWorldPos = " + player.getWorldPosition());

            // console.log("cameraPos = " + this.cameraNode.getPosition());
            // console.log("cameraWorldPos = " + this.cameraNode.getWorldPosition());
        }, this);
    }

    update(deltaTime: number) {

    }
}


