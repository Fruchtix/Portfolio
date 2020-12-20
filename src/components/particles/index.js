import React from 'react'
import { Container, Particle, ParticleWrapper } from './particleselements'

export default function Particles() {
    return (
        <Container>
            <ParticleWrapper>
                <Particle index={1} />
                <Particle index={2} />
                <Particle index={3} />
            </ParticleWrapper>
            <ParticleWrapper>
                <Particle index={1} />
                <Particle index={2} />
                <Particle index={3} />
            </ParticleWrapper>
            <ParticleWrapper>
                <Particle index={1} />
                <Particle index={2} />
                <Particle index={3} />
            </ParticleWrapper>
            <ParticleWrapper>
                <Particle index={1} />
                <Particle index={2} />
                <Particle index={3} />
            </ParticleWrapper>
        </Container>
    )
}
