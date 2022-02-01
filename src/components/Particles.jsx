import React from 'react';
import Particles from 'react-tsparticles'

const VoidParticles = () => {
    return (
        <Particles
            params={{
                fpsLimit: 60,
                particles: {
                    fullScreen: {
                        enable: true,
                        zIndex: -50
                    },
                    number: {
                        density: {
                            enable: true,
                            value_area: 1000
                        },
                        value: 80
                    },
                    color: {
                        value: "#ffffff"
                    },
                    links: {
                        enable: true,
                        color: "#ffffff",
                        opacity: 0.1,
                        distance: 250
                    },
                    move: {
                        enable: true
                    },
                    opacity: {
                        value: 1,
                        random: true,
                        anim: {
                            enable: true
                        }
                    },
                }
            }}
        />
    );
}

export default VoidParticles;