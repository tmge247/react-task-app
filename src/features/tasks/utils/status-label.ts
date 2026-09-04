 // ステータスに応じた表示ラベルを返す関数
export const getStatusLabel = (status: boolean): string => {
    return status ? "完了" : "未完了"
}