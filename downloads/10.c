#include <stdio.h>

int main() {
    int x, y;
    int result_x, result_y; // 用於儲存 scanf 的返回值

    // 獲取第一個整數
    printf("輸入第一個整數：");
    result_x = scanf("%d", &x);
    if (result_x != 1) {
        printf("錯誤：請輸入整數。\n");
        return 1;
    }

    // 獲取第二個整數
    printf("輸入第二個整數：");
    result_y = scanf("%d", &y);
    if (result_y != 1) {
        printf("錯誤：請輸入整數。\n");
        return 1;
    }

    // 計算並輸出它們的乘積
    printf("這兩個整數的乘積 = %d\n", x * y);

    return 0;
}