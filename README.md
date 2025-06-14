# GitHub Actions サンプル - Hello World

このリポジトリは、シンプルなHello Worldを出力するreusable workflowを提供します。

## 📁 構成

```
.github/
└── workflows/
    └── hello-world.yml    # Hello World reusable workflow
example/
└── reusable.yml           # 使用例
```

## 🔄 Hello World Reusable Workflow

### 機能
- カスタマイズ可能なメッセージ出力
- シンプルなHello World実行

### 入力パラメータ
- `message`: 出力メッセージ（デフォルト: 'Hello, World!'）

## 🚀 使用方法

### 基本的な使用例

```yaml
name: Hello World
on: [push]

jobs:
  hello:
    uses: ./.github/workflows/hello-world.yml
```

### カスタムメッセージ

```yaml
name: Custom Hello
on: [push]

jobs:
  hello:
    uses: ./.github/workflows/hello-world.yml
    with:
      message: "こんにちは、世界！"
```

### 外部リポジトリから使用

```yaml
jobs:
  hello:
    uses: yuucu/sample_reuseable_github_actions/.github/workflows/hello-world.yml@main
    with:
      message: "Hello from external repo!"
```

## 📝 ライセンス

MIT License
