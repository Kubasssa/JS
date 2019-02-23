window.addEventListener("DOMContentLoaded", function () {
    const canvas = document.querySelector(".canvas");
    const engine = new BABYLON.Engine(canvas, true);

    const createScene = function () {
        const scene = new BABYLON.Scene(engine);
        scene.clearColor = new BABYLON.Color3.White();

        // const camera = new BABYLON.FreeCamera("camera1",
        //     new BABYLON.Vector3(0, 6, -10), scene);


        var camera = new BABYLON.ArcRotateCamera("camera", 0, 0, 0, new BABYLON.Vector3(0, 0, 0), scene);
        camera.setPosition(new BABYLON.Vector3(0, 2, -8));
        camera.setTarget(BABYLON.Vector3.Zero());
        camera.attachControl(canvas, true);

        //----------------Create Tiles--------------------------------------------------------------
        const boxURB = BABYLON.MeshBuilder.CreateBox("box", {
            size: 1,
            depth: 0.01,
        }, scene);
        boxURB.position = new BABYLON.Vector3(0.7, 0, -1.3);

        const boxULB = BABYLON.MeshBuilder.CreateBox("box", {
            size: 1,
            depth: 0.01,
        }, scene);
        boxULB.position = new BABYLON.Vector3(-0.7, 0, -1.3);

        const boxURF = BABYLON.MeshBuilder.CreateBox("box", {
            size: 1,
            depth: 0.01,
        }, scene);
        boxURF.position = new BABYLON.Vector3(0.7, 0, 1.3);

        const boxULF = BABYLON.MeshBuilder.CreateBox("box", {
            size: 1,
            depth: 0.01,
        }, scene);
        boxULF.position = new BABYLON.Vector3(-0.7, 0, 1.3);

        const boxBRU = BABYLON.MeshBuilder.CreateBox("box", {
            size: 1,
            depth: 0.01,
        }, scene);
        boxBRU.position = new BABYLON.Vector3(0.7, 0.6, -0.7);
        boxBRU.rotation.x = Math.PI / 2;

        const boxBLU = BABYLON.MeshBuilder.CreateBox("box", {
            size: 1,
            depth: 0.01,
        }, scene);
        boxBLU.position = new BABYLON.Vector3(-0.7, 0.6, -0.7);
        boxBLU.rotation.x = Math.PI / 2;

        const boxFRU = BABYLON.MeshBuilder.CreateBox("box", {
            size: 1,
            depth: 0.01,
        }, scene);
        boxFRU.position = new BABYLON.Vector3(0.7, 0.6, 0.7);
        boxFRU.rotation.x = Math.PI / 2;

        const boxFLU = BABYLON.MeshBuilder.CreateBox("box", {
            size: 1,
            depth: 0.01,
        }, scene);
        boxFLU.position = new BABYLON.Vector3(-0.7, 0.6, 0.7);
        boxFLU.rotation.x = Math.PI / 2;

        const boxUBR = BABYLON.MeshBuilder.CreateBox("box", {
            size: 1,
            depth: 0.01,
        }, scene);
        boxUBR.position = new BABYLON.Vector3(1.3, 0, -0.7);
        boxUBR.rotation.y = Math.PI / 2;

        const boxUBL = BABYLON.MeshBuilder.CreateBox("box", {
            size: 1,
            depth: 0.01,
        }, scene);
        boxUBL.position = new BABYLON.Vector3(-1.3, 0, -0.7);
        boxUBL.rotation.y = Math.PI / 2;

        const boxUFR = BABYLON.MeshBuilder.CreateBox("box", {
            size: 1,
            depth: 0.01,
        }, scene);
        boxUFR.position = new BABYLON.Vector3(1.3, 0, 0.7);
        boxUFR.rotation.y = Math.PI / 2;

        const boxUFL = BABYLON.MeshBuilder.CreateBox("box", {
            size: 1,
            depth: 0.01,
        }, scene);
        boxUFL.position = new BABYLON.Vector3(-1.3, 0, 0.7);
        boxUFL.rotation.y = Math.PI / 2;

        const boxDRF = BABYLON.MeshBuilder.CreateBox("box", {
            size: 1,
            depth: 0.01,
        }, scene);
        boxDRF.position = new BABYLON.Vector3(0.7, -1.3, -1.3);

        const boxDLF = BABYLON.MeshBuilder.CreateBox("box", {
            size: 1,
            depth: 0.01,
        }, scene);
        boxDLF.position = new BABYLON.Vector3(-0.7, -1.3, -1.3);

        const boxDRB = BABYLON.MeshBuilder.CreateBox("box", {
            size: 1,
            depth: 0.01,
        }, scene);
        boxDRB.position = new BABYLON.Vector3(0.7, -1.3, 1.3);

        const boxDLB = BABYLON.MeshBuilder.CreateBox("box", {
            size: 1,
            depth: 0.01,
        }, scene);
        boxDLB.position = new BABYLON.Vector3(-0.7, -1.3, 1.3);

        const boxBRD = BABYLON.MeshBuilder.CreateBox("box", {
            size: 1,
            depth: 0.01,
        }, scene);
        boxBRD.position = new BABYLON.Vector3(0.7, -1.9, -0.7);
        boxBRD.rotation.x = Math.PI / 2;

        const boxBLD = BABYLON.MeshBuilder.CreateBox("box", {
            size: 1,
            depth: 0.01,
        }, scene);
        boxBLD.position = new BABYLON.Vector3(-0.7, -1.9, -0.7);
        boxBLD.rotation.x = Math.PI / 2;

        const boxFRD = BABYLON.MeshBuilder.CreateBox("box", {
            size: 1,
            depth: 0.01,
        }, scene);
        boxFRD.position = new BABYLON.Vector3(0.7, -1.9, 0.7);
        boxFRD.rotation.x = Math.PI / 2;

        const boxFLD = BABYLON.MeshBuilder.CreateBox("box", {
            size: 1,
            depth: 0.01,
        }, scene);
        boxFLD.position = new BABYLON.Vector3(-0.7, -1.9, 0.7);
        boxFLD.rotation.x = Math.PI / 2;

        const boxDBR = BABYLON.MeshBuilder.CreateBox("box", {
            size: 1,
            depth: 0.01,
        }, scene);
        boxDBR.position = new BABYLON.Vector3(1.3, -1.3, -0.7);
        boxDBR.rotation.y = Math.PI / 2;

        const boxDBL = BABYLON.MeshBuilder.CreateBox("box", {
            size: 1,
            depth: 0.01,
        }, scene);
        boxDBL.position = new BABYLON.Vector3(-1.3, -1.3, -0.7);
        boxDBL.rotation.y = Math.PI / 2;

        const boxDFR = BABYLON.MeshBuilder.CreateBox("box", {
            size: 1,
            depth: 0.01,
        }, scene);
        boxDFR.position = new BABYLON.Vector3(1.3, -1.3, 0.7);
        boxDFR.rotation.y = Math.PI / 2;

        const boxDFL = BABYLON.MeshBuilder.CreateBox("box", {
            size: 1,
            depth: 0.01,
        }, scene);
        boxDFL.position = new BABYLON.Vector3(-1.3, -1.3, 0.7);
        boxDFL.rotation.y = Math.PI / 2;

        //--------------------END--------------------------------------------------------------------
        //--------------------Meterial Colors---------------------------------------------------------------
        const materialBlue = new BABYLON.StandardMaterial(scene);
        materialBlue.diffuseColor = new BABYLON.Color3(0, 0, 1);

        const materialRed = new BABYLON.StandardMaterial(scene);
        materialRed.diffuseColor = new BABYLON.Color3(1, 0, 0);

        const materialOrange = new BABYLON.StandardMaterial(scene);
        materialOrange.diffuseColor = new BABYLON.Color3(1, 0.5, 0);

        const materialYellow = new BABYLON.StandardMaterial(scene);
        materialYellow.diffuseColor = new BABYLON.Color3(1, 1, 0);

        const materialWhite = new BABYLON.StandardMaterial(scene);
        materialWhite.diffuseColor = new BABYLON.Color3(1, 1, 1);

        const materialGreen = new BABYLON.StandardMaterial(scene);
        materialGreen.diffuseColor = new BABYLON.Color3(0, 1, 0);

        boxULF.material = materialRed;
        boxURF.material = materialRed;
        boxULB.material = materialOrange;
        boxURB.material = materialOrange;
        boxFLU.material = materialBlue;
        boxFRU.material = materialBlue;
        boxBLU.material = materialBlue;
        boxBRU.material = materialBlue;
        boxUFR.material = materialWhite;
        boxUFL.material = materialYellow;
        boxUBR.material = materialWhite;
        boxUBL.material = materialYellow;
        boxDLF.material = materialOrange;
        boxDRF.material = materialOrange;
        boxDLB.material = materialRed;
        boxDRB.material = materialRed;
        boxFLD.material = materialGreen;
        boxFRD.material = materialGreen;
        boxBLD.material = materialGreen;
        boxBRD.material = materialGreen;
        boxDFR.material = materialWhite;
        boxDBR.material = materialWhite;
        boxDFL.material = materialYellow;
        boxDBL.material = materialYellow;

        //--------------------END------------------------------------------------------------------

        //const light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
        var light = new BABYLON.DirectionalLight("DirectionalLight", new BABYLON.Vector3(2, 2, 2), scene);
        var light2 = new BABYLON.DirectionalLight("DirectionalLight", new BABYLON.Vector3(-2, -2, -2), scene);

        const CoR_At = new BABYLON.Vector3(0, 0, 0);
        const pivot = new BABYLON.TransformNode("root");
        pivot.position = CoR_At;

        const pivotU = new BABYLON.TransformNode("root");
        pivotU.position = CoR_At;

        // box.parent = pivot;
        // box2.parent = pivot;
        // box3.parent = pivot;
        // box4.parent = pivot;
        // box5.parent = pivot;
        // box6.parent = pivot;
        // box7.parent = pivot;
        // box8.parent = pivot;
        // box9.parent = pivot;
        // box10.parent = pivot;
        // box11.parent = pivot;
        // box12.parent = pivot;
        // boxDLF.parent = pivot;
        // boxDRF.parent = pivot;
        // boxDLB.parent = pivot;
        // boxDRB.parent = pivot;
        // boxFLD.parent = pivot;
        // boxFRD.parent = pivot;
        // boxBLD.parent = pivot;
        // boxBRD.parent = pivot;
        // boxDFR.parent = pivot;
        // boxDBR.parent = pivot;
        // boxDFL.parent = pivot;
        // boxDBL.parent = pivot;


        // box.parent = pivotU;
        // box2.parent = pivotU;
        // box3.parent = pivotU;
        // box4.parent = pivotU;
        // box5.parent = pivotU;
        // box6.parent = pivotU;
        // box7.parent = pivotU;
        // box8.parent = pivotU;
        // box9.parent = pivotU;
        // box10.parent = pivotU;
        // box11.parent = pivotU;
        // box12.parent = pivotU;

        var angle = Math.PI / 2;
        var angle2 = -Math.PI / 2;
        var axis = new BABYLON.Vector3(0, 2, 0);
        var axisY = new BABYLON.Vector3(5, 0, 0);

        scene.actionManager = new BABYLON.ActionManager(scene);
        scene.actionManager.registerAction(
            new BABYLON.ExecuteCodeAction({
                    trigger: BABYLON.ActionManager.OnKeyDownTrigger,
                    parameter: "j"
                },
                function () {
                    boxULF.parent = pivot;
                    boxURF.parent = pivot;
                    boxULB.parent = pivot;
                    boxURB.parent = pivot;
                    boxFLU.parent = pivot;
                    boxFRU.parent = pivot;
                    boxBLU.parent = pivot;
                    boxBRU.parent = pivot;
                    boxUFR.parent = pivot;
                    boxUFL.parent = pivot;
                    boxUBR.parent = pivot;
                    boxUBL.parent = pivot;
                    pivot.rotate(axis, angle, BABYLON.Space.WORLD);
                })
        )

        scene.actionManager.registerAction(
            new BABYLON.ExecuteCodeAction({
                    trigger: BABYLON.ActionManager.OnKeyDownTrigger,
                    parameter: "f"
                },
                function () {
                    boxULF.parent = pivot;
                    boxURF.parent = pivot;
                    boxULB.parent = pivot;
                    boxURB.parent = pivot;
                    boxFLU.parent = pivot;
                    boxFRU.parent = pivot;
                    boxBLU.parent = pivot;
                    boxBRU.parent = pivot;
                    boxUFR.parent = pivot;
                    boxUFL.parent = pivot;
                    boxUBR.parent = pivot;
                    boxUBL.parent = pivot;
                    pivot.rotate(axis, angle2, BABYLON.Space.WORLD);
                })
        )

        scene.actionManager.registerAction(
            new BABYLON.ExecuteCodeAction({
                    trigger: BABYLON.ActionManager.OnKeyDownTrigger,
                    parameter: "i"
                },
                function () {
                    boxURF.parent = pivot;
                    boxURB.parent = pivot;
                    boxFRU.parent = pivot;
                    boxBRU.parent = pivot;
                    boxUFR.parent = pivot;
                    boxUBR.parent = pivot;
                    boxDRF.parent = pivot;
                    boxDRB.parent = pivot;
                    boxFRD.parent = pivot;
                    boxBRD.parent = pivot;
                    boxDFR.parent = pivot;
                    boxDBR.parent = pivot;
                    pivot.rotate(axisY, angle, BABYLON.Space.WORLD);
                })
        )

        scene.actionManager.registerAction(
            new BABYLON.ExecuteCodeAction({
                    trigger: BABYLON.ActionManager.OnKeyDownTrigger,
                    parameter: "k"
                },
                function () {
                    box.rotation.x += -1.57;
                })
        )

        return scene;
    }

    const scene = createScene();
    engine.runRenderLoop(function () {
        scene.render();
    });
});