import { IProfileResponse } from 'Services/Api/requests/profile/interfaces'

export type Props = {
  data: IProfileResponse
  onMutate: () => void
}
