#include <stdio.h>
#include <stdlib.h>

int fib(int n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    return fib(n - 1) + fib(n - 2);
}

int main(void) {
    int n = 20;  // Reduced to a reasonable number for recursion
    int x = fib(n);
    
    printf("fib(%d) = %d\n", n, x);
    
    return EXIT_SUCCESS;
}
