import { ConfigProvider, Tabs } from 'antd'

import FeaturedArticle from '@/features/author/components/featured-article'
import MainArticles from '@/features/author/components/main-articles'
import LatestArticles from '@/features/author/components/latest-articles'
import ProgrammingNews from '@/features/author/components/programming-news'
import AvailableTopics from '@/features/author/components/available-topics'

import styles from './AuthorPage.module.scss'

type AuthorPageProps = {
  authorName: string
}

export default async function AuthorPage({ authorName }: AuthorPageProps) {
  return (
    <div className={styles['authorPage']}>
      <div className={styles['wrapper']}>
        {/* Main Content */}
        <div className={styles['mainContent']}>
          <div className={styles['featured']}>
            <FeaturedArticle />
          </div>

          {/* Tabbed Content */}
          <div className={styles['tabs']}>
            <ConfigProvider
              theme={{
                components: {
                  Tabs: {
                    colorBorderSecondary: '#1e293b',
                    inkBarColor: '#14b8a6',
                    itemColor: '#6b7280',
                    itemHoverColor: '#14b8a6',
                    itemActiveColor: '#14b8a6',
                    itemSelectedColor: '#14b8a6',
                  },
                },
              }}
            >
              <Tabs
                defaultActiveKey="1"
                className={styles['custom-tabs']}
                tabBarStyle={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
                items={[
                  {
                    label: <span>By @{authorName}</span>,
                    key: '1',
                    children: <MainArticles withTitleHeader={false} />,
                  },
                  {
                    label: <span>New This Week</span>,
                    key: '2',
                    children: <LatestArticles withTitleHeader={false} />,
                  },
                  {
                    label: <span>Programming News</span>,
                    key: '3',
                    children: <ProgrammingNews withTitleHeader={false} />,
                  },
                ]}
              />
            </ConfigProvider>
          </div>

          <div className="hidden lg:block">
            <MainArticles />
          </div>
        </div>

        {/* Sidebar */}
        <div className={styles['sidebar']}>
          <div>
            <LatestArticles withThumbnail={false} withDescription={false} />
          </div>

          <div>
            <AvailableTopics />
          </div>

          <div>
            <ProgrammingNews />
          </div>
        </div>
      </div>
    </div>
  )
}
