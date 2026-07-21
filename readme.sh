#!/bin/bash

set -euo pipefail

# Generate WebP files
for f in ./assets/videos/*.mp4; do
    out="./assets/$(basename "${f%.mp4}.webp")"
    [ -f "$out" ] || ffmpeg -i "$f" -c:v libwebp -vf fps=30 -loop 0 "$out" &
done

wait

# Generate README file
OUTPUT=README.md

cat > "$OUTPUT" <<EOF
# Kircraft Scripts

See [How to use scripts](#how-to-use-scripts) for instructions.

EOF

for script in ./scripts/*.js; do
    content=$(<"$script")

    for field in name version description; do
        # Capture `Hello World` from `@name Hello World\n`
        [[ $content =~ @$field[[:space:]]+([^$'\n']+) ]] \
            && declare "$field=${BASH_REMATCH[1]}"
    done

    script="${script#./}"
    asset="assets/$(basename "$script")"
    asset=("${asset%.js}".*)
    asset="${asset[0]}"

    printf \
        "# [%s](%s) v%s\n\n%s\n\n![%s](%s)\n\n" \
        "$name" "$script" "$version" "$description" "$name" "$asset" \
        >> "$OUTPUT"
done

# Remove second newline at end of file: \n\n -> \n
truncate -s -1 "$OUTPUT"

# vertical-align is not yet supported; keep it for future compatibility
cat >> "$OUTPUT" <<EOF
# How to use scripts

1. Install a userscript extension like **Tampermonkey**:  
    [<img src="assets/instructions/md-chrome.svg" width="24" style="vertical-align: middle"> Tampermonkey for Chrome](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)  
    [<img src="assets/instructions/md-firefox.svg" width="24" style="vertical-align: middle"> Tampermonkey for Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
    <br>

2. **Choose** the **script** you want to use from above and click the blue text:
    # [Hello World](scripts/hello-world.js) v1.2.3

3. **Copy** the **script** by clicking the square icon (highlighted in blue) from the top menu:
    ![Top menu](assets/instructions/gh-top-menu.png)
    <br>

4. Navigate to the Tampermonkey **dashboard**:
    <div style="line-height: 0;">
    <img src="assets/instructions/tm-top-menu-1.png">
    <img src="assets/instructions/tm-top-menu-2.png">
    <img src="assets/instructions/tm-top-menu-3.png">
    </div>
    <br>

5. Click the **plus icon** on the top menu to create a new script:
    ![Plus icon](assets/instructions/tm-plus-icon.png)
    <br>

6. Delete the default code and **paste** the **script** on the code editor:
    ![Hello world script](assets/instructions/tm-hello-world.png)
    <br>

7. Press **Ctrl+S** to save the script and ensure that it is enabled:
    ![Save script](assets/instructions/tm-save.png)
    <br>

8. Go to **[kircraft.io](https://kircraft.io/)** and reload the page if necessary.

---

<p align="center">This project is licensed under the WTFPL, Version 2. See <a href="LICENSE">LICENSE</a> for details.</p>
EOF
