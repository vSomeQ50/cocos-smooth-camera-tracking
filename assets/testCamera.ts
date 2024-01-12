import { _decorator, Component, Node, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('testCamera')
export class testCamera extends Component {
    @property(Node)
    player: Node = null;

    @property
    lerpFactor: number = 0.1;
    start() {

    }

    update(deltaTime: number) {
        if (!this.player) {
            return;
        }

        // Get the current camera position
        const cameraPos = this.node.position;

        // Get the target position based on the player's position
        const targetPos = this.player.position;

        // Scale the target position based on the player's scale
        const scaledTargetPos = new Vec3(targetPos.x * 1, targetPos.y * 1)

        // User lerp to smoothly interpolate between the current and target positions
        const lerpedPos = Vec3.lerp(new Vec3(), cameraPos, scaledTargetPos, this.lerpFactor);

        // Set the camera position to the lerped position
        this.node.setPosition(lerpedPos);
    }
}


