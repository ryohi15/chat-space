## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false|
|password|string|null: false|
### Association
- has_many :messages
- has_many :user_groups
- has_many :groups through: :user_groups

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
### Association
- has_many :messages
- has_many :user_groups 
- has_many :users through: :user_groups 


## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
|img|text||
### Association
- belongs_to :user
- belongs_to :group

## users_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer| null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group