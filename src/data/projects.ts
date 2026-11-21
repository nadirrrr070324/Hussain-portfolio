import type { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    cassette: 1,
    title: 'Thermosphere',
    tagline: 'Volumetric Latent Radiance Field Engine',
    description:
      'Next-generation neural rendering subsystem utilizing optimized Tri-Ton and CUDA kernels to process continuous NeRF coordinate spaces with dynamic photon scattering in sub-8ms frames.',
    tags: ['CUDA', 'Tri-Ton', 'NeRF', 'PyTorch C++'],
    inspectLabel: 'KERNEL',
    badge: '120 FPS P99',
  },
  {
    id: '2',
    cassette: 2,
    title: 'Aetherium OS',
    tagline: 'Micro-Kernel Spatial UI',
    description:
      'WebGPU native compositing window manager and spatial layout manager designed for head-mounted displays and high-refresh desktop HUDs running on complicated Rust WebAssembly.',
    tags: ['Rust', 'WebGPU', 'WSL', 'WSM'],
    inspectLabel: 'COMPOSITOR',
    badge: '0.4ms FRAME TIME',
  },
  {
    id: '3',
    cassette: 3,
    title: 'Distributed LLM Cluster',
    tagline: 'Zero-Copy Tensor Mesh',
    description:
      'Ultra-low latency model orchestration fabric featuring direct InfiniBand RDMA bindings, speculative decoding trees, and dynamic kv-cache eviction across 64-node clusters.',
    tags: ['Go', 'gRPC / Protobuf', 'RDMA', 'VLLM Core'],
    inspectLabel: 'TOPOLOGY',
    badge: '4.2K TOPS THROUGHPUT',
  },
  {
    id: '4',
    cassette: 4,
    title: 'ZK-Biometric Sentinel',
    tagline: 'Verifiable Identity Protocol',
    description:
      'Zero-knowledge proof-of-humanness system compiling face embedding vector invariants directly into Circom R1CS circuits for on-chain non-custodial decentralized attestation.',
    tags: ['Circom 2.1', 'SnarkJS', 'Groth16', 'Solidity'],
    inspectLabel: 'CIRCUIT',
    badge: '410ms PROOF GENERATION',
  },
];
