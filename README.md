# UI Lab — 세션을 열면 시작되는 2주 학습 저장소

## 처음 한 번
1. 이 폴더를 GitHub 저장소로 만든다 (`git init` → GitHub에 빈 저장소 생성 → push).
2. 터미널에서 이 폴더로 이동 후 `claude` 실행 → "시작하자".
3. Day 1에서 Next.js 프로젝트와 검사 도구를 이 폴더 안에 세팅한다.

## 매일 흐름
```
[세션 A: 구현]
claude 실행 → "시작하자" (또는 /today)
  → 오늘 과제 안내 → 브랜치 day-NN-주제 생성
  → 매트릭스 작성·확정 → 구현 → 테스트
  → /submit → 제출서 초안 확인·수정 → 커밋·push·PR
  → 세션 종료

[세션 B: 리뷰]  ← 반드시 새 터미널 또는 /clear 후
/ui-review NN
  → 자동 측정 + 채점 + 질문 3개 → reviews/day-NN.md
  → (코드 보지 않고) 답변 작성
/ui-review NN answers
  → 최종 점수·판정 → progress.md 갱신
  → 통과: PR 병합 / 재도전: 다음 세션에서 보완 과제부터
```

## 폴더
| 경로 | 내용 |
|---|---|
| `CLAUDE.md` | Claude가 매 세션 읽는 규칙 |
| `docs/curriculum.md` | 14일 과제 |
| `docs/progress.md` | 현재 위치·점수·약점 (기억 역할) |
| `docs/rubric.md` | 채점 기준 |
| `docs/matrix/` | 컴포넌트별 상태·예외 매트릭스 |
| `submissions/day-NN/` | 제출서, 스크린샷, 비교 보드 |
| `reviews/day-NN.md` | 리뷰 결과 |
| `.claude/skills/` | today, submit, ui-review |

## 주의
- 리뷰는 구현한 세션에서 하지 않는다.
- 공식 값은 직접 측정해서 넣는다.
- 하루 빠지면 몰아서 하지 말고 멈춘 곳부터 이어 간다.
