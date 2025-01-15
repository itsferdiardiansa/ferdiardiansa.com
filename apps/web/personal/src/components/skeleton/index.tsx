import Skeleton from './Skeleton'
import type { SkeletonProps } from './Skeleton'
import SkeletonAvatar from './SkeletonAvatar'
import type { SkeletonAvatarProps } from './SkeletonAvatar'
import SkeletonParagraph from './SkeletonParagraph'
import type { SkeletonParagraphProps } from './SkeletonParagraph'
import SkeletonButton from './SkeletonButton'
import type { SkeletonButtonProps } from './SkeletonButton'
import SkeletonInput from './SkeletonInput'
import type { SkeletonInputProps } from './SkeletonInput'
import SkeletonImage from './SkeletonImage'
import type { SkeletonImageProps } from './SkeletonImage'

type ExtendedSkeleton = typeof Skeleton & {
  Avatar: typeof SkeletonAvatar
  Paragraph: typeof SkeletonParagraph
  Button: typeof SkeletonButton
  Input: typeof SkeletonInput
  Image: typeof SkeletonImage
}

const ExtendedSkeleton: ExtendedSkeleton = Skeleton as ExtendedSkeleton

ExtendedSkeleton.Avatar = SkeletonAvatar
ExtendedSkeleton.Paragraph = SkeletonParagraph
ExtendedSkeleton.Button = SkeletonButton
ExtendedSkeleton.Input = SkeletonInput
ExtendedSkeleton.Image = SkeletonImage

export type {
  SkeletonProps,
  SkeletonAvatarProps,
  SkeletonParagraphProps,
  SkeletonButtonProps,
  SkeletonInputProps,
  SkeletonImageProps,
}

export default ExtendedSkeleton
