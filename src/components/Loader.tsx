import React, { useEffect, useState, useRef } from 'react';
import Matter from 'matter-js';

const PhysicsWorld = () => {
    const sceneRef = useRef(null);

    useEffect(() => {
        // Engine setup
        const engine = Matter.Engine.create();
        const render = Matter.Render.create({
            element: sceneRef.current,
            engine: engine,
            options: {
                width: window.innerWidth,
                height: window.innerHeight,
                pixelRatio: 2,
                background: 'var(--color)',
                wireframes: false,
            }
        });

        // Create bounds and shapes
        const ground = Matter.Bodies.rectangle(
            (window.innerWidth / 2) + 160, window.innerHeight + 60, window.innerWidth + 320, 160, { render: { fillStyle: 'var(--color)' }, isStatic: true }
        );
        const leftWall = Matter.Bodies.rectangle(-200, window.innerHeight / 2, 50, window.innerHeight, { isStatic: true, render: { fillStyle: 'var(--color1)' } });
        const rightWall = Matter.Bodies.rectangle(window.innerWidth + 200, window.innerHeight / 2, 50, window.innerHeight, { isStatic: true, render: { fillStyle: 'var(--color1)' } });
        // Add all bodies to the world
        Matter.World.add(engine.world, [ground, leftWall, rightWall]);

        const centerWidth = window.innerWidth / 2;
        const randomOffset = () => {
            return Math.random() * (window.innerWidth - 100) - (window.innerWidth - 100) / 2;
        };

        const createBody = (texture :string, width :number, height :number, xOffset :any, yOffset :number) => {
            return Matter.Bodies.rectangle(centerWidth + xOffset(), yOffset, width, height, {
                chamfer: Matter.chamferOption,
                render: {
                    sprite: {
                        texture: `/loader/${texture}.png`,
                        xScale: 0.7, 
                        yScale: 0.7  
                    }
                }
            });
        };

        const scale = 0.7;

        var aloha = createBody('ALOHA', 328 * scale, 70 * scale, randomOffset, 100);
        var aloha2 = createBody('ALOHA2', 656 * scale, 214 * scale, randomOffset, 120);
        var bonjour = createBody('BONJOUR', 459 * scale, 71 * scale, randomOffset, 100);
        var bonjour2 = createBody('BONJOUR2', 740 * scale, 214 * scale, randomOffset, 110);
        var ciao = createBody('CIAO', 223 * scale, 70 * scale, randomOffset, 100);
        var ciao2 = createBody('CIAO2', 380 * scale, 214 * scale, randomOffset, 120);
        var korean = createBody('KOREAN', 434 * scale, 90 * scale, randomOffset, 100);
        var korean2 = createBody('KOREAN2', 746 * scale, 214 * scale, randomOffset, 80);
        var chinese = createBody('CHINESE', 189 * scale, 91 * scale, randomOffset, 140);
        var chinese2 = createBody('CHINESE2', 438 * scale, 214 * scale, randomOffset, 100);
        var japanese = createBody('JAPANESE', 463 * scale, 86 * scale, randomOffset, 100);
        var japanese2 = createBody('JAPANESE2', 762 * scale, 214 * scale, randomOffset, 100);
        var hola = createBody('HOLA', 258 * scale, 89 * scale, randomOffset, 100);
        var hola2 = createBody('HOLA2', 570 * scale, 214 * scale, randomOffset, 100);
        var hello = createBody('HELLO', 303 * scale, 70 * scale, randomOffset, 100);
        var hello2 = createBody('HELLO2', 570 * scale, 214 * scale, randomOffset, 100);

        // Matter.World.add(engine.world, );
        Matter.World.add(engine.world, [aloha, aloha2, bonjour2, bonjour, ciao, ciao2, korean, korean2, chinese, chinese2, japanese, japanese2, hola, hola2, hello, hello2]);
        // Handling resizing
        window.addEventListener('resize', () => {
            render.canvas.width = window.innerWidth;
            render.canvas.height = window.innerHeight;
            Matter.Body.setPosition(ground, { x: window.innerWidth / 2, y: window.innerHeight });
            Matter.Body.setPosition(leftWall, { x: 0, y: window.innerHeight / 2 });
            Matter.Body.setPosition(rightWall, { x: window.innerWidth, y: window.innerHeight / 2 });
        });

        // Run the engine and renderer
        Matter.Engine.run(engine);
        Matter.Render.run(render);

        return () => {
            // Cleanup on component unmount
            Matter.Engine.clear(engine);
            Matter.Render.stop(render);
            render.canvas.remove();
            window.removeEventListener('resize', () => { });
        };
    }, []);

    return <div ref={sceneRef} />;
};

const Loader = () => {
    return (
        <>
            <div>
                <PhysicsWorld />
            </div>
        </>
    )
}
export default Loader;