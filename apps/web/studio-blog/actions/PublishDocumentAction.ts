import {DocumentActionComponent, useDocumentOperation} from 'sanity'
import type {DocumentActionProps} from 'sanity'
import {firstUpperCaseLatter} from '@/utils/textFormatter'

export function createImprovedAction(originalPublishAction: DocumentActionComponent) {
  const PublishDocumentAction = (props: DocumentActionProps) => {
    const {patch, publish} = useDocumentOperation(props.id, props.type)
    const originalResult = originalPublishAction(props)

    const labelName =
      (publish.disabled === 'ALREADY_PUBLISHED' || props?.published?._createdAt
        ? `Update `
        : `Create `) + firstUpperCaseLatter(props.type)

    return {
      ...originalResult,
      label: labelName,
      onHandle: () => {
        const {published, draft} = props

        if (draft?.isPublished !== undefined) {
          const isDocumendPublished = published === null || !draft?.isPubslihed

          if (isDocumendPublished) {
            patch.execute([
              {
                set: {
                  isPublished: true,
                },
              },
            ])
          }
        }

        publish.execute()
        props.onComplete()
      },
    }
  }

  return PublishDocumentAction
}
