import { NextResponse } from 'next/server'
import { FrameRequest, getFrameMessage } from '@coinbase/onchainkit'

export const dynamic = 'force-dynamic'

export async function POST(req: Request): Promise<Response> {
  const body: FrameRequest = await req.json()
  const { isValid, message } = await getFrameMessage(body)

  if (!isValid) {
    return NextResponse.json({ error: 'Invalid frame message' }, { status: 400 })
  }

  const buttonIndex = message.button
  let response: any

  switch (buttonIndex) {
    case 1: // Купить билет
      response = {
        image: {
          src: `${process.env.NEXT_PUBLIC_SITE_URL}/assets/images/frame-preview.jpg`,
          aspectRatio: '1.91:1'
        },
        buttons: [
          {
            label: 'Подтвердить покупку',
            action: 'tx',
            target: `${process.env.NEXT_PUBLIC_SITE_URL}/api/buy-ticket`,
            postUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/api/frame`
          }
        ],
        postUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/api/frame`
      }
      break
    case 2: // Мои билеты
      response = {
        image: {
          src: `${process.env.NEXT_PUBLIC_SITE_URL}/api/ticket-image?address=${message.interactor.verified_accounts[0]}`,
          aspectRatio: '1.91:1'
        },
        buttons: [
          {
            label: 'Назад',
            action: 'post'
          }
        ]
      }
      break
    default:
      response = {
        image: {
          src: `${process.env.NEXT_PUBLIC_SITE_URL}/assets/images/frame-preview.jpg`,
          aspectRatio: '1.91:1'
        },
        buttons: [
          {
            label: 'Купить билет',
            action: 'post'
          },
          {
            label: 'Мои билеты',
            action: 'post'
          }
        ]
      }
  }

  return NextResponse.json(response)
}
