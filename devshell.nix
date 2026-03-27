{ pkgs }:
pkgs.mkShell {
  packages = [
    pkgs.nodejs_22
  ];
}
