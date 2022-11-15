import { CheckIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Feature1',
    description: '自建服务整体资源成本是同类竞品的 1/10',
  },
  {
    name: 'Feature2',
    description: '更低的部署规格，每月 ¥500 人民币以内即可提供生产级高可用服务',
  },
  {
    name: 'Feature3',
    description: '极致优化的最小部署规格用于测试，每日 ¥10 人民币以内即可提供1万TPS生产消费能力',
  },
  {
    name: 'Feature4',
    description: '计算资源硬隔离的多租户，真正做到租户之间完全无影响，类 AWS Aurora Serverless 体验。',
  },
  {
    name: 'Feature5',
    description: '分区数/队列数不受文件系统限制，完全的水平扩展，单计算实例可达上百万分区规模。',
  },
  {
    name: 'Feature6',
    description: '对流计算消费场景极其友好，集群扩缩容分区数不变，对消费方完全透明。',
  },
  {
    name: 'Feature7',
    description: '每份消息物理存储多份，落盘后向发送方返回成功，可以保证数据可靠性 10 个 9 以上。',
  },
  {
    name: 'Feature8',
    description: '写入消息 P99 Latency 指标 P99.99 < 5ms，远优于 Kafka。',
  },
  {
    name: 'Feature9',
    description: '服务可用性指标 99.995%，依赖服务商的支持',
  },
  {
    name: 'Feature10',
    description: '向 RocketMQ 发送消息，可以通过 Kafka 消费，反之亦然。',
  },
]

export function PrimaryFeatures() {
  return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">用户视角特性</h2>
            <p className="mt-4 text-lg text-gray-500">
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.
            </p>
          </div>
          <dl className="mt-12 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-8">
            {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
                    <p className="ml-9 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
                  </dt>
                  <dd className="mt-2 ml-9 text-base text-gray-500">{feature.description}</dd>
                </div>
            ))}
          </dl>
        </div>
      </div>
  )
}
