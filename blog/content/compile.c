#include <signal.h>
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>


int main(int argc, char *argv[]) {
    
    if (access(argv[1], F_OK) == 0) {
        int filenameLen = strlen(argv[1]);
        char filename[filenameLen];

        strcpy(filename, argv[1]);

        filename[filenameLen-2] = '\0';

        char cmd1[] = "pandoc "; // followed by the full filename
        char cmd2[] = " --standalone --katex --template=template.php -o "; // followed by the filename without the .md
        char cmd3[] = "php";

        int totalSize = strlen(cmd1) + strlen(argv[1]) + strlen(cmd2) + filenameLen + strlen(cmd3);

        char cmd[totalSize];
        strcpy(cmd, "");

        strcat(cmd, cmd1);
        strcat(cmd, argv[1]);
        strcat(cmd, cmd2);
        strcat(cmd, filename);
        strcat(cmd, cmd3);

        if (access("template.php", F_OK) == 0) {
            printf("[*] Running: %s\n", cmd);
            system(cmd);
        }
        else {
            printf("[*] tamplate.php not found!\n");
            return -1;
        }
    }
    else {
        printf("[*] File not found or was not passed!\n");
        return -1;
    }

    return 0;
}
