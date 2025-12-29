#!/usr/bin/env python3
"""
访客计数服务启动脚本
"""

import uvicorn
import os
import sys
from pathlib import Path

def main():
    """启动访客计数服务"""
    
    # 获取当前脚本所在目录
    current_dir = Path(__file__).parent
    os.chdir(current_dir)
    
    print("🚀 启动访客计数服务...")
    print("📍 服务地址: http://localhost:8081")
    print("📚 API文档: http://localhost:8081/docs")
    print("🔧 ReDoc文档: http://localhost:8081/redoc")
    print("=" * 50)
    
    try:
        uvicorn.run(
            "main:app",
            host="0.0.0.0",
            port=8081,
            reload=True,
            log_level="info",
            access_log=True
        )
    except KeyboardInterrupt:
        print("\n👋 服务已停止")
    except Exception as e:
        print(f"❌ 启动失败: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
