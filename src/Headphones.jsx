import { useRef, useLayoutEffect, useEffect } from 'react';
import { useLoader } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import gsap from 'gsap';
import * as THREE from 'three';
export function Headphones({ onModelLoaded, headphonesObject }) {
  const headphonesRef = useRef(null);
  const fbx = useLoader(FBXLoader, 'assets/models/headphones.fbx');
  //Normal
  const baseColor = useLoader(TextureLoader, 'assets/textures/Headphones_Base_Color.png');
  const heightMap = useLoader(TextureLoader, 'assets/textures/Headphones_Height.png');
  const metallicMap = useLoader(TextureLoader, 'assets/textures/Headphones_Metallic.png');
  const normalMap = useLoader(TextureLoader, 'assets/textures/Headphones_Normal_OpenGL.png');
  const roughnessMap = useLoader(TextureLoader, 'assets/textures/Headphones_Roughness.png');
  const hdrTexture = useLoader(RGBELoader, 'assets/textures/studio_small_08_1k.hdr');

  //Leather
  const leatherBaseColor = useLoader(
    TextureLoader,
    'assets/textures/variations/leather/Headphones_Base_Color.png'
  );
  const leathernormalMap = useLoader(
    TextureLoader,
    'assets/textures/variations/leather/Headphones_Normal_OpenGL.png'
  );
  const roughnessLeatherBaseColor = useLoader(
    TextureLoader,
    'assets/textures/variations/leather/Headphones_Roughness.png'
  );
  //Fabric
  const fabricBaseColor = useLoader(
    TextureLoader,
    'assets/textures/variations/fabric/Headphones_Base_Color.png'
  );
  const fabriNormalMap = useLoader(
    TextureLoader,
    'assets/textures/variations/fabric/Headphones_Normal_OpenGL.png'
  );
  const fabricProperties = {
    map: fabricBaseColor,
    normalMap: leathernormalMap,
    roughnessMap: roughnessMap,
    envMap: hdrTexture,
    emissiveMap: metallicMap
  };
  const leatherProperties = {
    map: leatherBaseColor,
    normalMap: leathernormalMap,
    roughnessMap: roughnessLeatherBaseColor,
    envMap: hdrTexture,
    emissiveMap: metallicMap
  };
  const materialProperties = {
    map: baseColor,
    normalMap: normalMap,
    metalnessMap: metallicMap,
    roughnessMap: roughnessMap,
    envMap: hdrTexture,
    emissiveMap: metallicMap
  };
  const materialBase = new THREE.MeshPhysicalMaterial(materialProperties);
  const material = new THREE.MeshStandardMaterial(materialProperties);
  const materialPad = new THREE.MeshStandardMaterial(materialProperties);
  const materialHeadBand = new THREE.MeshStandardMaterial(materialProperties);
  materialBase.normalScale.set(1, 1);
  material.normalScale.set(1, 1);
  useEffect(() => {
    Object.assign(materialPad, selectType(headphonesObject.pad));
    Object.assign(materialHeadBand, selectType(headphonesObject.headBand));

    materialBase.color = new THREE.Color(selectColor(headphonesObject.color));
    const headphones = headphonesRef.current;

    if (!headphones) return;
    const rootModel = headphones.children[0].children[0];

    //Color changes
    rootModel.material[0] = materialBase;
    rootModel.material[4] = materialBase;

    //Pad changes
    rootModel.material[3] = materialPad;

    //HeadBand changes
    rootModel.material[2] = materialHeadBand;
  }, [headphonesObject]);

  useLayoutEffect(() => {
    materialBase.color = new THREE.Color(selectColor('black'));

    const headphones = headphonesRef.current;
    const rootModel = headphones.children[0].children[0];
    rootModel.material[0] = materialBase;
    rootModel.material[1] = material;
    rootModel.material[2] = materialHeadBand;
    rootModel.material[3] = materialPad;
    rootModel.material[4] = materialBase;
    rootModel.material[5] = material;
    onModelLoaded();
    gsap.from(headphones.rotation, {
      duration: 2,
      y: Math.PI / 2,
      ease: 'sine.inOut',
      delay: 0.1
    });
  }, [fbx]);
  function selectColor(color) {
    switch (color) {
      case 'black':
        return '#3d3d3d';
      case 'white':
        return '#ffffff';
      case 'red':
        return '#c45e5e';
      case 'green':
        return '#b7edd0';
      case 'purple':
        return '#ddcafc';
      case 'blue':
        return '#73aae6';
    }
  }

  function selectType(type) {
    switch (type) {
      case 'leather':
        return leatherProperties;
      case 'fabric':
        return fabricProperties;
      case 'foam':
        return materialProperties;
    }
  }
  return (
    <mesh ref={headphonesRef}>
      <primitive object={fbx} position={[0, -2.34, 0]} scale={[0.003, 0.003, 0.003]} />
    </mesh>
  );
}
