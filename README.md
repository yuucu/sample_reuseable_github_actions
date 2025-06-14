# GitHub Actions サンプル - 軽量なReusable Workflow

このリポジトリは、軽量でシンプルなnpm test/lint用のreusable workflowを提供します。複雑なCI/CDパイプラインの代わりに、必要最小限の機能で高速動作することを重視しています。

## 📁 構成

```
.github/
└── workflows/
    └── test-lint.yml               # 軽量なtest/lint用reusable workflow
example/
├── simple-test-lint-example.yml    # シンプルな使用例
├── complete-ci-cd-example.yml      # 重いCI/CD例（参考用）
└── composite-action-example.yml    # コンポジットアクション例（参考用）
```

## 🔄 軽量なReusable Workflow

### Test & Lint ワークフロー (`test-lint.yml`)

npm/yarn/pnpm対応の軽量なテスト・リント実行ワークフローです。

**機能:**
- Node.js環境のセットアップ（キャッシュ対応）
- 依存関係の自動インストール
- リンティング実行（オプション）
- テスト実行（オプション）
- パッケージマネージャー自動判別

**入力パラメータ:**
- `node-version`: Node.jsバージョン（デフォルト: '20'）
- `package-manager`: パッケージマネージャー（デフォルト: 'npm'）
- `run-tests`: テスト実行フラグ（デフォルト: true）
- `run-lint`: リント実行フラグ（デフォルト: true）
- `working-directory`: 作業ディレクトリ（デフォルト: '.'）

## ✨ 特徴

- **軽量**: 必要最小限の機能のみ
- **高速**: キャッシュを活用した高速実行
- **柔軟**: npm/yarn/pnpm対応
- **シンプル**: 複雑な設定不要

## 🚀 使用方法

### 基本的な使用例

```yaml
name: CI
on: [push, pull_request]

jobs:
  test-and-lint:
    uses: ./.github/workflows/test-lint.yml
    with:
      node-version: '20'
      package-manager: 'npm'
```

### 高度な使用例

```yaml
name: Advanced CI
on: [push, pull_request]

jobs:
  # テストのみ実行
  test-only:
    uses: ./.github/workflows/test-lint.yml
    with:
      node-version: '20'
      run-tests: true
      run-lint: false
  
  # 複数Node.jsバージョンでテスト
  test-matrix:
    strategy:
      matrix:
        node-version: ['18', '20', '22']
    uses: ./.github/workflows/test-lint.yml
    with:
      node-version: ${{ matrix.node-version }}
      package-manager: 'npm'
  
  # pnpmを使用
  test-with-pnpm:
    uses: ./.github/workflows/test-lint.yml
    with:
      node-version: '20'
      package-manager: 'pnpm'
```

### 外部リポジトリから呼び出す場合

```yaml
jobs:
  test-and-lint:
    uses: your-org/githubactions_sample/.github/workflows/test-lint.yml@main
    with:
      node-version: '20'
      package-manager: 'npm'
```

## 📋 前提条件

### package.json設定

```json
{
  "scripts": {
    "test": "jest",
    "lint": "eslint ."
  }
}
```

### 必要なシークレット

このworkflowは基本的にシークレット不要です。

## 📋 セットアップ手順

### 1. ワークフローファイルをコピー

`.github/workflows/test-lint.yml` を自分のリポジトリにコピー

### 2. 他のリポジトリから使用

```yaml
name: CI
on: [push, pull_request]

jobs:
  test-and-lint:
    uses: your-org/githubactions_sample/.github/workflows/test-lint.yml@main
    with:
      node-version: '20'
      package-manager: 'npm'
```

## 🔧 カスタマイズ

### ワークフローの編集

`test-lint.yml` を直接編集してカスタマイズ可能:
- 追加のステップを挿入
- 異なるパッケージマネージャー対応
- カスタムスクリプトの実行

## 🐛 トラブルシューティング

### よくある問題

1. **スクリプトが見つからない**
   - `package.json` に `test` と `lint` スクリプトを定義

2. **パッケージマネージャーエラー**
   - `package-manager` パラメータを正しく設定

3. **Node.jsバージョンエラー**
   - サポートされているNode.jsバージョンを使用

## 📝 ライセンス

MIT License

## 🤝 コントリビューション

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
