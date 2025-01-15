import Skeleton from '@/components/skeleton'
import styles from './AvailableTopics.module.scss'

type AvalaibleTopics = string[]

export type AvailableTopicsProps = {
  topics: AvalaibleTopics
}

const topics = ['React', 'JavaScript', 'TypeScript', 'CSS', 'Node.js']

const AvailableTopicsLoader = () => (
  <>
    {[...Array(3)].map((_, index) => (
      <Skeleton.Button key={index} shape="circle" />
    ))}
  </>
)

export default function AvailableTopics() {
  return (
    <div className={styles['container']}>
      <h2 className={styles['header']}>Available Topics</h2>

      <div className={styles['topics']}>
        <AvailableTopicsLoader />
        {/* {topics.map((topic, index) => (
          <span key={index} className={styles["topic"]}>
            {topic}
          </span>
        ))} */}
      </div>
    </div>
  )
}
