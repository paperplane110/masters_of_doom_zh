export type DetailEntry = {
  title: string
  content: string
}

export const details: Record<string, DetailEntry> = {
  carmack: {
    title: 'John Carmack',
    content:
      'John Carmack（约翰·卡马克）是 id Software 的核心技术负责人之一，以极强的工程能力推动了 3D 图形与游戏引擎的演进。\n\n他在 PC 平台上实现了多项关键技术突破（如高性能渲染、引擎架构与工具链），并直接影响了 FPS 类型游戏的形成与发展。'
  },
  romero: {
    title: 'John Romero',
    content:
      'John Romero（约翰·罗梅罗）是 id Software 的联合创始人之一，以关卡设计、玩法直觉和强烈的表达欲著称。\n\n他推动了 id 在游戏节奏、视觉风格与市场传播方面的快速扩张，也是团队早期“把技术变成产品”的关键推手。'
  }
}
