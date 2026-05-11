uniform float uStepValue;
uniform float uPatternSize;
uniform float uSmoothValue;
uniform vec3 uSeed;

varying vec2 vUv;
varying vec3 vPosition;

#include ../includes/simplexNoise3d.glsl

void main()
{
    vec3 white = vec3(1.0, 1.0, 1.0);
    vec3 black = vec3(0.0, 0.0, 0.0);

    // smoothstep
    float cowPatternMix = smoothstep(uStepValue - uSmoothValue, uStepValue + uSmoothValue, snoise((vPosition + uSeed) * uPatternSize));

    vec3 color = mix(white, black, cowPatternMix);

    csm_DiffuseColor = vec4(color, 1.0);
}