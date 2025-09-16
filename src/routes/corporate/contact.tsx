import { zodResolver } from "@hookform/resolvers/zod"
import { createFileRoute } from "@tanstack/react-router"
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

type Props = {}

const contactSchema = z.object({
  inquiryType: z.enum(["general", "service", "career", "support", "other"]),
  companyName: z.string().min(1, "会社名を入力してください"),
  department: z.string().optional(),
  name: z.string().min(1, "お名前を入力してください"),
  nameKana: z.string().min(1, "フリガナを入力してください"),
  email: z.string().email("有効なメールアドレスを入力してください"),
  phone: z.string().optional(),
  message: z.string().min(10, "お問い合わせ内容を10文字以上で入力してください"),
  agreement: z.boolean().refine((val) => val === true, {
    message: "個人情報の取り扱いに同意してください",
  }),
})

type ContactForm = z.infer<typeof contactSchema>

export const Route = createFileRoute("/corporate/contact")({
  component: ContactPage,
})

/**
 * Contact Page
 */
function ContactPage(_props: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      inquiryType: "general",
      agreement: false,
    },
  })

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Form submitted:", data)
    toast.success("お問い合わせを送信しました", {
      description: "担当者より3営業日以内にご連絡させていただきます。",
    })

    reset()
    setIsSubmitting(false)
  }

  const inquiryTypes = [
    { value: "general", label: "一般的なお問い合わせ" },
    { value: "service", label: "サービスについて" },
    { value: "career", label: "採用について" },
    { value: "support", label: "サポート" },
    { value: "other", label: "その他" },
  ]

  const contactInfo = [
    {
      icon: Phone,
      title: "お電話でのお問い合わせ",
      content: "03-1234-5678",
      subContent: "平日 9:00-18:00",
    },
    {
      icon: Mail,
      title: "メールでのお問い合わせ",
      content: "info@techcorp.example.com",
      subContent: "24時間受付",
    },
    {
      icon: MapPin,
      title: "本社所在地",
      content: "〒100-0001",
      subContent: "東京都千代田区千代田1-1-1",
    },
    {
      icon: Clock,
      title: "営業時間",
      content: "平日 9:00-18:00",
      subContent: "土日祝休み",
    },
  ]

  return (
    <div className="py-12 lg:py-16">
      <div className="container">
        <div className="mb-12 text-center">
          <h1 className="mb-4 font-bold text-4xl tracking-tighter sm:text-5xl">
            お問い合わせ
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground">
            サービスに関するご質問、ご相談など、お気軽にお問い合わせください
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>お問い合わせフォーム</CardTitle>
                <CardDescription>
                  下記フォームに必要事項をご記入の上、送信してください。
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="inquiryType">お問い合わせ種別 *</Label>
                    <Select
                      value={watch("inquiryType")}
                      onValueChange={(value) =>
                        setValue("inquiryType", value as any)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="選択してください" />
                      </SelectTrigger>
                      <SelectContent>
                        {inquiryTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.inquiryType && (
                      <p className="text-destructive text-sm">
                        {errors.inquiryType.message}
                      </p>
                    )}
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="companyName">会社名 *</Label>
                      <Input
                        id="companyName"
                        placeholder="株式会社◯◯"
                        {...register("companyName")}
                      />
                      {errors.companyName && (
                        <p className="text-destructive text-sm">
                          {errors.companyName.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="department">部署名</Label>
                      <Input
                        id="department"
                        placeholder="営業部"
                        {...register("department")}
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">お名前 *</Label>
                      <Input
                        id="name"
                        placeholder="山田 太郎"
                        {...register("name")}
                      />
                      {errors.name && (
                        <p className="text-destructive text-sm">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="nameKana">フリガナ *</Label>
                      <Input
                        id="nameKana"
                        placeholder="ヤマダ タロウ"
                        {...register("nameKana")}
                      />
                      {errors.nameKana && (
                        <p className="text-destructive text-sm">
                          {errors.nameKana.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="email">メールアドレス *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="email@example.com"
                        {...register("email")}
                      />
                      {errors.email && (
                        <p className="text-destructive text-sm">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">電話番号</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="03-1234-5678"
                        {...register("phone")}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">お問い合わせ内容 *</Label>
                    <Textarea
                      id="message"
                      placeholder="お問い合わせ内容をご記入ください"
                      rows={6}
                      {...register("message")}
                    />
                    {errors.message && (
                      <p className="text-destructive text-sm">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="agreement"
                      checked={watch("agreement")}
                      onCheckedChange={(checked) =>
                        setValue("agreement", checked as boolean)
                      }
                    />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor="agreement"
                        className="font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        個人情報の取り扱いに同意する *
                      </label>
                      <p className="text-muted-foreground text-sm">
                        <a
                          href="/corporate/privacy"
                          className="underline hover:text-primary"
                        >
                          プライバシーポリシー
                        </a>
                        をご確認の上、同意してください。
                      </p>
                    </div>
                  </div>
                  {errors.agreement && (
                    <p className="text-destructive text-sm">
                      {errors.agreement.message}
                    </p>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "送信中..."
                    ) : (
                      <>
                        送信する
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>お問い合わせ先</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info) => {
                  const Icon = info.icon
                  return (
                    <div key={info.title} className="flex gap-4">
                      <Icon className="mt-0.5 h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">{info.title}</p>
                        <p className="text-sm">{info.content}</p>
                        <p className="text-muted-foreground text-sm">
                          {info.subContent}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>よくあるご質問</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="mb-1 font-medium">回答までの時間は？</p>
                  <p className="text-muted-foreground text-sm">
                    通常3営業日以内にご連絡させていただきます。
                  </p>
                </div>
                <div>
                  <p className="mb-1 font-medium">相談は無料ですか？</p>
                  <p className="text-muted-foreground text-sm">
                    初回のご相談は無料で承っております。
                  </p>
                </div>
                <div>
                  <p className="mb-1 font-medium">
                    オンライン相談は可能ですか？
                  </p>
                  <p className="text-muted-foreground text-sm">
                    はい、Zoom等でのオンライン相談も対応しております。
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
